import { prisma } from "../utils/prisma";

export const getCategories = async () => {
    const categories = await prisma.category.findMany();
    return categories


}
