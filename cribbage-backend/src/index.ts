import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to Cribbage backend!');
});

// TODO: Add cribbage game routes here

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
