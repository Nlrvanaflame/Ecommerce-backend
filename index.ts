import app from './app';
import sequelize from './config/dbConfig';
const PORT = 4000;

sequelize.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  });
