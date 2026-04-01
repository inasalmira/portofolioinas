import {
  int,
  longtext,
  mysqlEnum,
  mysqlTable,
  foreignKey,
  serial,
  varchar,
} from "drizzle-orm/mysql-core";
export const users = mysqlTable("users", {
  id: int().primaryKey().autoincrement(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  password: varchar({ length: 255 }).notNull(),
  role: mysqlEnum("role", ["user", "admin"]).notNull(),
});
export const kategoris = mysqlTable("kategoris", {
  id: int().primaryKey().autoincrement(),
  name: varchar({ length: 255 }).notNull(),
  deskripsi: longtext().notNull(),
});
export const works = mysqlTable(
  "works",
  {
    id: int().primaryKey().autoincrement(),
    judul: varchar({ length: 255 }).notNull(),
    gambar: varchar({ length: 255 }),
    isi: longtext().notNull(),
    kategoris_id: int().notNull(),
  },
  (table) => ({
    kategoris_fk: foreignKey({
      columns: [table.kategoris_id],
      foreignColumns: [kategoris.id],
    }),
  }),
);

export const blog = mysqlTable(
  "blog",
  {
    id: int().primaryKey().autoincrement(),
    judul: varchar({ length: 255 }).notNull(),
    gambar: varchar({ length: 255 }),
    isi: longtext().notNull(),
    kategoris_id: int().notNull(),
  },
  (table) => ({
    kategoris_fk: foreignKey({
      columns: [table.kategoris_id],
      foreignColumns: [kategoris.id],
    }),
  }),
);
export const comments = mysqlTable("comments", {
  id: int().primaryKey().autoincrement(),
  komentar: varchar({ length: 255 }).notNull(),
  blog_id: int(),
  works_id: int(),
  user_id: int().notNull(),
},
(table) => ({
      blog_fk: foreignKey({
        columns: [table.blog_id],
        foreignColumns: [blog.id],
      }),
      works_fk: foreignKey({
        columns: [table.works_id],
        foreignColumns: [works.id], 
      }),
      user_fk: foreignKey({
        columns: [table.user_id],
        foreignColumns: [users.id], 
      }),
  }),
);
