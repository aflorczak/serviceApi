import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

export const counter = async () => {
    return prisma.user.count();
}

export const createUser = async (user) => {
    return prisma.user.create({
        data: user
    });
}

export const getUsers = async () => {
    return prisma.user.findMany();
}

export const getUserById = async (id) => {
    return prisma.user.findFirstOrThrow({
        where: {
            id: id
        }
    });
}

export const updateUserEmailById = async (id, email) => {
    return prisma.user.update({
        where: {
            id: id
        },
        data: {
            email: email
        }
    });
};

export const updateUserPasswordById = async (id, password) => {
    return prisma.user.update({
        where: {
            id: id
        },
        data: {
            password: password
        }
    });
};

export const deleteUserById = async (id) => {
    return prisma.user.delete({
        where: {
            id: id
        }
    });
}
