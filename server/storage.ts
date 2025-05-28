import { users, contacts, type User, type InsertUser, type Contact, type InsertContact } from "@shared/schema";
import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";
import dotenv from "dotenv";
import { eq, desc } from "drizzle-orm";
dotenv.config();

const sqlite = new Database(process.env.SQLITE_DB_PATH || "./sqlite.db");
const db = drizzle(sqlite);

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
}

export const storage: IStorage = {
  async getUser(id: number) {
    const result = await db.select().from(users).where(eq(users.id, id)).get();
    return result ?? undefined;
  },
  async getUserByUsername(username: string) {
    const result = await db.select().from(users).where(eq(users.username, username)).get();
    return result ?? undefined;
  },
  async createUser(insertUser: InsertUser) {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  },
  async createContact(insertContact: InsertContact) {
    const [contact] = await db.insert(contacts).values({ ...insertContact, createdAt: new Date().toISOString() }).returning();
    return contact;
  },
  async getContacts() {
    const result = await db.select().from(contacts).orderBy(desc(contacts.createdAt));
    return result;
  },
};
