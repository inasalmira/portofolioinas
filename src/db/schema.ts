import {
  int,
  longtext,
  mysqlEnum,
  mysqlTable,
  foreignKey,
  serial,
  varchar,
  datetime,
} from "drizzle-orm/mysql-core";
import { sql } from "drizzle-orm/sql/sql";

export const users = mysqlTable("users", {
  id: int().primaryKey().autoincrement(),
  nama: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  password: varchar({ length: 255 }).notNull(),
  role: mysqlEnum("role", ["user", "admin"]).notNull(),
  created_at: datetime()
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updated_at: datetime()
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});

export const kategoris = mysqlTable("kategoris", {
  id: int().primaryKey().autoincrement(),
  nama: varchar({ length: 255 }).notNull(),
  deskripsi: longtext().notNull(),
  created_at: datetime()
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updated_at: datetime()
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});

export const works = mysqlTable(
  "works",
  {
    id: int().primaryKey().autoincrement(),
    judul: varchar({ length: 255 }).notNull(),
    gambar: varchar({ length: 255 }),
    isi: longtext().notNull(),
    kategori_id: int().notNull(),
    created_at: datetime()
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updated_at: datetime()
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
  },
  (table) => ({
    kategoris_fk: foreignKey({
      columns: [table.kategori_id],
      foreignColumns: [kategoris.id],
    }),
  }),
);

export const blogs = mysqlTable(
  "blogs",
  {
    id: int().primaryKey().autoincrement(),
    judul: varchar({ length: 255 }).notNull(),
    gambar: varchar({ length: 255 }),
    isi: longtext().notNull(),
    kategori_id: int().notNull(),
    created_at: datetime()
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updated_at: datetime()
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
  },
  (table) => ({
    kategoris_fk: foreignKey({
      columns: [table.kategori_id],
      foreignColumns: [kategoris.id],
    }),
  }),
);

export const comments = mysqlTable(
  "comments",
  {
    id: int().primaryKey().autoincrement(),
    komentar: varchar({ length: 255 }).notNull(),
    blog_id: int(),
    work_id: int(),
    user_id: int().notNull(),
    created_at: datetime()
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updated_at: datetime()
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
  },
  (table) => ({
    blog_fk: foreignKey({
      columns: [table.blog_id],
      foreignColumns: [blogs.id],
    }),
    works_fk: foreignKey({
      columns: [table.work_id],
      foreignColumns: [works.id],
    }),
    user_fk: foreignKey({
      columns: [table.user_id],
      foreignColumns: [users.id],
    }),
  }),
);
