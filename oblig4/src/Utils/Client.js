import sanityClient from '@sanity/client';

const options = {
  projectId: "w6m127p8",
  dataset: "production",
};

const client = sanityClient({
  ...options,
  useCdn: process.env.NODE_ENV === 'production',
});

export default client;
