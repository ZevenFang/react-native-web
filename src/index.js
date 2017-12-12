import dva from 'dva';
import models from './models';
import router from './router';
import './index.css';

const app = dva();
models.map(m => app.model(m));

app.router(router);
app.start('#root');
