CREATE TABLE IF NOT EXISTS `family_names` (
	`id` integer PRIMARY KEY NOT NULL,
	`family_name` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS `first_names` (
	`id` integer PRIMARY KEY NOT NULL,
	`first_name` text NOT NULL,
	`gender` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS `messages` (
	`id` integer PRIMARY KEY NOT NULL,
	`anonymous` text NOT NULL,
	`message` text NOT NULL,
	`created_at` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS `professionals` (
	`id` integer PRIMARY KEY NOT NULL,
	`professional` text DEFAULT 'Jobless' NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS `usernames` (
	`id` integer PRIMARY KEY NOT NULL,
	`first_name_id` integer NOT NULL,
	`family_name_id` integer NOT NULL,
	`birthdate` text,
	`professional` text NOT NULL,
	`created_at` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	FOREIGN KEY (`first_name_id`) REFERENCES `first_names`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`family_name_id`) REFERENCES `family_names`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`professional`) REFERENCES `professionals`(`id`) ON UPDATE no action ON DELETE no action
);
