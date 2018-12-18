<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->call(NewsTablesSeeder::class);
        $this->call(UsersTableSeeder::class);
        $this->call(\Backpack\Settings\database\seeds\SettingsTableSeeder::class);
        $this->call(IndexPageSeeder::class);
    }
}
