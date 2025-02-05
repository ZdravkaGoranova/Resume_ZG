import dotenv from 'dotenv';
import express from 'express';
import { MongoClient, ServerApiVersion } from 'mongodb';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/Cluster0';

// Middleware
app.use(cors());
app.use(express.json());

const client = new MongoClient(MONGO_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
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

    console.log('!!!', data);
  } catch (error) {
    console.error('Не може да се свърже с MongoDB:', error);
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
    console.log('Данни, които се изпращат:', data);

    res.json({ message: 'Сървърът работи 🚀', data });
  } catch (error) {
    console.error('Грешка при извличането на данни:', error);
    res.status(500).json({
      message: 'Грешка при извличането на данни от MongoDB.',
      error: error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Сървърът стартира на http://localhost:${PORT}`);
});
