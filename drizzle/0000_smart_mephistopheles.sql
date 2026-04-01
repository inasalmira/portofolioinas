CREATE TABLE `blog` (
	`id` int AUTO_INCREMENT NOT NULL,
	`judul` varchar(255) NOT NULL,
	`isi` longtext NOT NULL,
	`kategoris_id` int NOT NULL,
	CONSTRAINT `blog_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `comments` (
	`id` int AUTO_INCREMENT NOT NULL,
	`komentar` varchar(255) NOT NULL,
	`blog_id` int,
	`works_id` int,
	`user_id` int NOT NULL,
	CONSTRAINT `comments_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `kategoris` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	CONSTRAINT `kategoris_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`email` varchar(255) NOT NULL,
	`password` varchar(255) NOT NULL,
	`role` enum('user','admin') NOT NULL,
	CONSTRAINT `users_id` PRIMARY KEY(`id`),
	CONSTRAINT `users_email_unique` UNIQUE(`email`)
);
--> statement-breakpoint
CREATE TABLE `works` (
	`id` int AUTO_INCREMENT NOT NULL,
	`judul` varchar(255) NOT NULL,
	`isi` longtext NOT NULL,
	`kategoris_id` int NOT NULL,
	CONSTRAINT `works_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `blog` ADD CONSTRAINT `blog_kategoris_id_kategoris_id_fk` FOREIGN KEY (`kategoris_id`) REFERENCES `kategoris`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `comments` ADD CONSTRAINT `comments_blog_id_blog_id_fk` FOREIGN KEY (`blog_id`) REFERENCES `blog`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `comments` ADD CONSTRAINT `comments_works_id_works_id_fk` FOREIGN KEY (`works_id`) REFERENCES `works`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `comments` ADD CONSTRAINT `comments_user_id_users_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `works` ADD CONSTRAINT `works_kategoris_id_kategoris_id_fk` FOREIGN KEY (`kategoris_id`) REFERENCES `kategoris`(`id`) ON DELETE no action ON UPDATE no action;