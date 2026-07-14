const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const isProjectPages = Boolean(process.env.GITHUB_ACTIONS) && !repositoryName.endsWith('.github.io');
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? (isProjectPages ? `/${repositoryName}` : '');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath,
  assetPrefix: basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default nextConfig;
