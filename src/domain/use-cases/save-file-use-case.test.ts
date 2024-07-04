import fs from 'fs';
import { SaveFile } from './save-file-use-case';

describe('SaveFileUseCase', () => {

    const customOptions = {
        fileContent: 'custom content',
        fileDestination: 'custom-outputs',
        fileName: 'custom-table-name'
    }

    const customFilePath = `${customOptions.fileDestination}/${customOptions.fileName}.txt`;


    afterEach(() => {
        const fileExist = fs.existsSync('outputs');
        if( fileExist ) fs.rmSync('outputs', { recursive: true });   
        
        const customFolderExist = fs.existsSync(customOptions.fileDestination);
        if( customFolderExist ) fs.rmSync(customOptions.fileDestination, { recursive: true });
    });

    test('Should save file with default values', () => {
        
        const saveFile = new SaveFile();
        const filePath = 'outputs/table.txt';

        const options = {
            fileContent: 'test content'
        }

        const result = saveFile.execute(options);
        const checkFile = fs.existsSync(filePath);
        const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8'})
        
        expect( result ).toBeTruthy();
        expect( checkFile ).toBe( true );
        expect( fileContent ).toBe( options.fileContent );
    });

    test('Should save file with custom values', () => {
        const saveFile = new SaveFile();

        const result = saveFile.execute(customOptions);
        const checkFile = fs.existsSync(customFilePath);
        const fileContent = fs.readFileSync(customFilePath, { encoding: 'utf-8' });

        expect( result ).toBeTruthy();
        expect( checkFile ).toBe(true);
        expect( fileContent ).toBe( customOptions.fileContent );
    });

    test('Should return false if directory could not be created', () => {

        const saveFile = new SaveFile();

        /**
         * el mockImplementation, significa que queremos sobreescribir
         * la funcionalidad del mkdirSync, por lo que nosotros 
         * querramos, en este caso el Error
         */
        const mkdirSpy = jest.spyOn(fs, 'mkdirSync').mockImplementation(
            () => { throw new Error('This is a custom error message from testing')}
        );

        const result = saveFile.execute(customOptions);

        expect( result ).toBe( false );

        mkdirSpy.mockRestore();
    })

    test('Should return false if file could not be created', () => {

        const saveFile = new SaveFile();

        const writeFileSpy = jest.spyOn(fs, 'writeFileSync').mockImplementation(
            () => { throw new Error('This is a custom writing error message')}
        );

        const result = saveFile.execute({fileContent: 'Hola'});
        expect( result ).toBe( false );
        writeFileSpy.mockRestore();
    })
})