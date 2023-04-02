import User from "../models/user.js";

export async function getUsers(request, h) {
    try {
        const users = await User.find();
        return h.response(users);
    } catch (err) {
        console.error(err);
        return h.response(err).code(500);
    }
}

export async function getUserById(request, h) {
    try {
        const user = await User.findById(request.params.id)
        return h.response(user)
    }
    catch (err) {
        console.error(err);
        return h.response(err).code(500);
    }
}

export async function addUser(request, h) {
    const { first_name, last_name, email, gender, ip_address } = request.payload;
    try {
        const newUser = new User({
            first_name: first_name,
            last_name: last_name,
            email: email,
            gender: gender,
            ip_address: ip_address
        });
        const savedUser = await newUser.save();
        return h.response(savedUser).code(201);
    } catch (err) {
        console.error(err);
        return h.response(err).code(400);
    }
}


export async function getUsersByFirstName(request, h) {
    const { first_name } = request.query;
    try {
        const result = await User.find({ first_name: first_name });
        return h.response(result);
    } catch (err) {
        console.error(err);
        return h.response(err).code(404);
    }
}

