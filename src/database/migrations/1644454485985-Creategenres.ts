import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Creategenres1644454485985 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
             new Table({
                 name:"genres",
                 columns: [
                     {
                         id:"id"
                         type:"string"
                     },
                     {
                        name:"genres",
                        type:"varchar"
                     }
                 ]
             })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("genres");
    }

}
