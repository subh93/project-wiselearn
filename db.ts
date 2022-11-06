import {connect} from 'mongoose';

export default function db(){
    const dburl: any = process.env.DB_URL;
    connect(dburl).then(data =>{
        console.log("Database Connected");
    }).catch(error => {
        console.log("Error while connecting to the database", error);
    })
}