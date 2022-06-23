const connect = require('@databases/sqlite');
const {sql} = require('@databases/sqlite');

const db = connect();

async function prepare() {
  await db.query(sql`
	CREATE TABLE namen (
		naam VARCHAR(100)
	) 
  `);

}
const prepared = prepare();

var names = [
	"Ally Boyle",
	"Elisha Cochran",
	"Javion Davis",
	"Sterling Mitchell",
	"Josh Williams",
	"Dillon Morgan",
	"Ayden Sanford",
	"Drew Bentley",
	"Julian Costa",
	"Natalya Walsh",
	"Malakai Campbell",
	"Christina Duran",
	"Aliya Liu",
	"Carmen Mckenzie",
	"Caroline Jackson",
	"Devin Morse",
	"Jamiya Chandler",
	"Dulce Shepard",
	"Kaitlyn Holder",
	"Angie Joyce",
	"Alanna Mays",
	"Derick Blackwell",
	"Mohammad Hansen",
]

async function setup_names(naam) {
	await prepared;
	await db.query(sql`INSERT INTO namen VALUES (${naam});`);
}



async function run() {
	for (var i = 0; i < names.length; i++) {
		setup_names(names[i]);
	}
	

  await prepared;
  const results = await db.query(sql`
    SELECT * FROM namen
  `);	

  results.sort((a, b) => a.naam.localeCompare(b.naam))

  console.log(results);
}
run()