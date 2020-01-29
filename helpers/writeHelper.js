module.exports = (NODE, register, value) => {
    return new Promise((resolve, reject) => {
        if (NODE.conn) {
            NODE.conn.writeItems(register, value, (anythingBad) => { // // Set ll1 M150 true
                NODE.doneWriting = true;
                if (anythingBad) { 
                    console.log("CANNOT WRITE!!!!"); 
                    
                    // Try once again.
                    NODE.conn.writeItems(register, value, (anythingBad) => { // // Set ll1 M150 true
                        NODE.doneWriting = true;
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