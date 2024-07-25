CREATE TABLE `events` (
	`id` integer PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`description` text,
	`notes` text,
	`timezone` text NOT NULL,
	`is_task` integer NOT NULL,
	`deleted_at` integer
);
--> statement-breakpoint
CREATE TABLE `event_dates` (
	`id` integer PRIMARY KEY NOT NULL,
	`event_id` integer,
	`begin_date` integer NOT NULL,
	`end_date` integer NOT NULL,
	FOREIGN KEY (`event_id`) REFERENCES `events`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `event_times` (
	`id` integer PRIMARY KEY NOT NULL,
	`event_id` integer,
	`begin_hour` integer NOT NULL,
	`end_minute` integer NOT NULL,
	`duration` integer NOT NULL,
	FOREIGN KEY (`event_id`) REFERENCES `events`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `event_recurrences` (
	`id` integer PRIMARY KEY NOT NULL,
	`event_id` integer,
	`recurrence` text,
	`recurrence_step` integer,
	`recur_monthly_on` text,
	`recur_until` text,
	`recur_until_date` integer,
	`recur_until_count` integer,
	`recurrence_complete_at` integer,
	FOREIGN KEY (`event_id`) REFERENCES `events`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `events_on_users` (
	`event_id` integer NOT NULL,
	`user_id` integer NOT NULL,
	PRIMARY KEY(`event_id`, `user_id`),
	FOREIGN KEY (`event_id`) REFERENCES `events`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
