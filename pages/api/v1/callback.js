import auth0 from '@/utils/auth0';

export default async (req, res) => {
  try {
    await auth0.handleCallback(req, res, { redirectTo: '/' });
  } catch (e) {
    console.log(e);
    res.status(error.status || 44).end(error.message);
  }
};
