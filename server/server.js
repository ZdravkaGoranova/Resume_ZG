import dotenv from 'dotenv';
import express from 'express';
import { MongoClient, ServerApiVersion } from 'mongodb';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/Cluster0';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Middleware
app.use(cors());
app.use(express.json());

const client = new MongoClient(MONGO_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
  },
});

async function run() {
  try {
    await client.connect();
    console.log(
      'Pinged your deployment. You successfully connected to MongoDB!',
    );

    const data = await client
      .db()
      .collection('ZdravkaGoranova')
      .find()
      .toArray();
    console.log('Data:', data);
  } catch (error) {
    console.error('Cannot connect to MongoDB:', error);
  }
}
run().catch(console.dir);

app.get('/', async (req, res) => {
  try {
    const data = await client
      .db()
      .collection('ZdravkaGoranova')
      .find()
      .toArray();
    console.log('Data being sent:', data);

    res.json({ message: 'Server is running 🚀', data });
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({
      message: 'Error fetching data from MongoDB.',
      error: error.message,
    });
  }
});

app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running at http://localhost:${PORT}/`);
});
