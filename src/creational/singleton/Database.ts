/**
 * Database singleton class
 */
export default class Database {
  private static _instance: Database | undefined;
  private static _connectionString: String;

  /**
   * Prevents the class to be directly instatiated
   */
  private constructor() {}

  /**
   * Creates or return a single instance of the Database
   * @param connectionString the database connection URI
   * @returns
   */
  public static getInstance(connectionString: string) {
    if (!this._instance) {
      this._instance = new Database();
      console.log(`Instance created`);
    }
    this._connectionString = connectionString;
    console.log(`Returning instance`);
    return this._instance;
  }

  /**
   * Connect to the database
   */
  public connect() {
    console.log(`Connected to ${Database._connectionString}`);
  }
}
