import Directory from "./components/directory/directory.component";

const App = () => {
    const categories = [
        {
            id: 1,
            title: "Metal",
            imageUrl: "https://images.unsplash.com/photo-1501166222995-ff31c7e93cef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1034&q=80",
        },
        {
            id: 2,
            title: "Rock",
            imageUrl: "https://images.unsplash.com/photo-1525857597365-5f6dbff2e36e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        },
        {
            id: 3,
            title: "R&B",
            imageUrl: "https://images.unsplash.com/photo-1477233534935-f5e6fe7c1159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        },
        {
            id: 4,
            title: "Pop",
            imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
        },
        {
            id: 5,
            title: "Electric",
            imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
        },
    ];
    return <Directory categories={categories} />;
};

export default App;
