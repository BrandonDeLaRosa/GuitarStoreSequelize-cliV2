const { Products,SchoolAdmin,SalesProducts,Sales } = require('../database/models');

class productServices {

    static async allProducts(){
        try {
            const products = await Products.findAll(
                {
                    include: [
                            {
                                model: SchoolAdmin,
                                attributes: ['firstname', 'lastname', 'username']
                            },
                            {
                                model:SalesProducts,include :[{
                                    model:Sales,
                                }]
                            }
                        ]
                }
            )
            return products
        } catch (error) {
            throw(error)
        }
    }
    static async newProduct(body){
        try {
            const product = await Products.create(body)
            return product
        } catch (error) {
            throw(error)
        }
    }

    static async getOne(id){
        try {
            const product = Products.findByPk(id,
                {
                    include: [
                            {
                                model: SchoolAdmin,
                                attributes: ['firstname', 'lastname', 'username']
                            },
                            {
                                model:SalesProducts,include :[{
                                    model:Sales,
                                }]
                            }
                        ]
                })
            return product
        } catch (error) {
            throw(error)
        }
    }

    static async updateOneProduct(id,body){
        try {
            const updating = Products.update(body, {
                where: {id}
            })
            return updating
        } catch (error) {
            throw (error)
        }
    }

    static async deleteOneProduct(id){
        try {
            const deleting = Products.destroy({
                where: {id}
            });
            return deleting
        } catch (error) {
            throw error
        }
    }
};

module.exports = productServices;