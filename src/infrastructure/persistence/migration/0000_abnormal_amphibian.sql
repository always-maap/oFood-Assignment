CREATE TABLE `reviews` (
	`id` varchar(36) NOT NULL,
	`order_id` varchar(36),
	`store_id` varchar(36),
	`order_rating` int,
	`order_comment` varchar(500),
	`delivery_rating` int,
	`delivery_comment` varchar(500),
	CONSTRAINT `reviews_id` PRIMARY KEY(`id`)
);
