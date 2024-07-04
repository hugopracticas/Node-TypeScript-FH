import { CreateTable }  from './create-table.use-case'
describe('Test in create-table.use', () => {

    test('Should create table with default values', () => {
        const createTable = new CreateTable();

        const table = createTable.execute({base:2});
        const rows = table.split('\n').length;

        expect( createTable ).toBeInstanceOf( CreateTable );
        expect( table ).toContain('2x1 = 2');
        expect( table ).toContain('2x10 = 20');
        expect( rows ).toBe(11);
        //console.log('Create table', table);
    });

    test('Should create table with custom values', () => {
        const createTable = new CreateTable();

        const table = createTable.execute({base:3, limit: 5});
        const rows = table.split('\n').length;

        console.log(table);
        expect( createTable ).toBeInstanceOf( CreateTable );
        expect( table ).toContain('3x1 = 3');
        expect( table ).toContain('3x5 = 15')
        
    });
})