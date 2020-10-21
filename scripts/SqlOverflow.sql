create database overflow;
use overflow;

create table roles (id int primary key not null auto_increment,
					role_name varchar(15)
					);


create table users (id INT auto_increment primary key , 
					username varchar(255) not null, 
					login varchar(15) not null, 
                    pw varchar(60) not null, 
                    sex int not null, 
                    fk_roles int not null default(0),
                    email varchar(255) not null,
                    foreign key (fk_roles) references roles(id)
                    );
                    
create table asks (id INT primary key auto_increment,
					fk_asks_users int not null,
                    fk_asks_answers int, 
					title varchar(60) not null,
                    body text not null,
                    createdAt timestamp not null default current_timestamp,
                    updatedAt timestamp not null default current_timestamp on update current_timestamp,
                    foreign key (fk_asks_users) references users(id)
					);
                    
create table answers (id INT primary key auto_increment,
					fk_answers_asks int not null,
                    fk_answers_users int not null,
                    body text not null,
                    createdAt timestamp not null default current_timestamp,
                    updatedAt timestamp not null default current_timestamp on update current_timestamp,
                    foreign key (fk_answers_asks) references asks(id),
                    foreign key (fk_answers_users) references users(id)
					);
                    
create table likes (fk_likes_answers int not null,
                    fk_likes_users int not null,
                    PRIMARY KEY (fk_likes_answers, fk_likes_users),
					foreign key (fk_likes_answers) references answers(id),
                    foreign key (fk_likes_users) references users(id)
					);