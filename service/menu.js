const {Menu,Section, Categories, Item, ModifierGroups, Modifiers} = require('../model');

function get(menu_id, section_id) {
    const menu = await Menu.findOne({ menu_id: menu_id });
    if (menu && menu.sections && menu.sections.includes(section_id)) {
        const section = await Section.
                                findOne({id: section_id}).
                                populate({
                                    path: 'categories',
                                    model: Categories,
                                    populate: { 
                                        path: 'items',
                                        model: Item,
                                        populate: {
                                            path: 'modifierGroups',
                                            model: ModifierGroups,
                                            populate: {
                                                path: 'modifiers',
                                                model: Modifiers
                                            }
                                        } }
                                  })
        if(section){
            return {status: 200, data: section};
        }else{
            return {status: 404, msg: 'Data not found'};
        }
    }

    return {status: 400, msg: 'Inappropriate data'}
}

module.exports.get = get;