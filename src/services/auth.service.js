const authService = {
    getToken: async () => {
        const request = await fetch(`http://192.168.31.94:15151/token`, {
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await request.json();
        window.localStorage.setItem('token', data)

    }

};

export default authService;
