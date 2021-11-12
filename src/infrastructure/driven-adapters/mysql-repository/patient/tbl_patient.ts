import {AutoIncrement, Column, Model, PrimaryKey, Table,} from "sequelize-typescript";

@Table({
    tableName: "tbl_patient",
    createdAt: false,
    updatedAt:false,
    

})
export class PatientData extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column
    id!: number;
    @Column
    documentNumber!: string;
    @Column
    firstName!: string;
    @Column
    lastName!: string;
    @Column
    age!: number;
    @Column
    address!: string;
    @Column
    gender!: string;
    @Column
    weight!: number;
    @Column
    height!: number;
    @Column
    smoker!:boolean;
    @Column
    smokerYears!:number;
    @Column
    diet!:boolean;
    @Column
    weightHeight!:number;
    @Column
    
    state!:string;
    @Column
    priority!:number;
    @Column
    risk!:number;
}