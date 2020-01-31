module.exports = (conn, register, value) => {
    return new Promise((resolve, reject) => {
        if (conn) {
            conn.writeItems(register, value, (anythingBad) => { // // Set ll1 M150 true
                
                if (anythingBad) { 
                    console.log("CANNOT WRITE!!!!"); 
                    
                    // Try once again.
                    conn.writeItems(register, value, (anythingBad) => { // // Set ll1 M150 true
                        if (anythingBad) { 
                            console.log("CANNOT WRITE 2ND TIME!!!!"); 
                            reject("CANNOT WRITE 2ND TIME!!!!");
                        } else {
                            resolve(register);
                        }
                    });
                    
                } else {
                    resolve(register);
                }
            });
        }
    }); 
};