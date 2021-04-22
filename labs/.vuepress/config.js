module.exports = {
    title: "Workshop Kafka fundamentals",
    description: "Workshop Kafka fundamentals",
    base: "/nc-kafka-fundamentals/",
    port: 3000,
    dest: './public/docs',
    themeConfig: {
        // Assumes GitHub. Can also be a full GitLab url.
        repo: 'Zenika/nc-kafka-fundamentals',
        logo: '/kafka-logo.png',
        docsDir: 'labs',
        sidebar: [
            '/1_GETTING_STARTED',
            '/2_PRODUCER',
            '/3_CONSUMER',
            '/4_SCHEMA_REGISTRY',
            '/5_STREAMS',
            '/6_CONNECT',
            '/7_REQUEST_REPLY',
            '/10_GLOSSARY'
        ]
    }
};
