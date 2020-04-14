let json = '{"id": "2"}';

try {
    let user = JSON.parse(json);
    if (!user.name) {
        throw new Error("Data does not have name");
    }
    console.log(user);
} catch (e)  {
    console.log(e.name);
    console.log(e.message);
    console.log(e.stack);

    console.log(`We get an error: ${e.name}`);
} finally {
    console.log("Finally");
}