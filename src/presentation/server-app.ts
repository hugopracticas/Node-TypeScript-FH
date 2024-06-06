import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file-use-case";

interface RunOptions {
    base: number;
    limit: number;
    showTable: boolean;
    destination: string;
    name: string;
}

export class ServerApp {

    static run({base, limit, showTable, destination, name}: RunOptions) {
        console.log('Server running...')
        const table = new CreateTable().execute({base, limit});

        const wasCreated = new SaveFile().execute({ 
            fileContent: table, 
            fileDestination: `${destination}/${name}-${base}`,
            //fileDestination: destination,
            fileName: name
        })
            
        if( showTable ) console.log('TABLA::',table);
        (wasCreated) ? console.log('File Created') : console.log('File not created!');
    }
}