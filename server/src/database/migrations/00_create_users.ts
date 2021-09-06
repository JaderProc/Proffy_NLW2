import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('users', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.strint('avatar').notNullable();
        table.strint('whatsapp').notNullable();
        table.strint('bio').notNullable();
        
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('users');
}