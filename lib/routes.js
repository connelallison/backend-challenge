import { checkAgainstRules } from './middleware/express';
import accountRouter from './api/account';

export default function (app) {
  // routes
  app.use('/api/account', checkAgainstRules, accountRouter);
  app.use('/api/v2/account', checkAgainstRules, accountRouter);

  // 404 sinkhole
  app.route('/*')
    .all((req, res) => {
      res.sendStatus(404);
    });
}
