function primaryServer () {
    throw new Error ("primary server nor connect");
}

function backupServer (){
    return "bacukp server response";
}

function requisition (){
    let response;

    try {
        response = primaryServer();
    } catch (erro) {
        console.log("Fault detected!");
        console.log("Redirect to backup server!");
        response = backupServer();
    }

    console.log("response received!", response);
}

requisition();