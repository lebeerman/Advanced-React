
const { forwardTo } = require('prisma-binding');

const Query = {

  items: forwardTo('db'),
  // dogs(parent, args, ctx, info){
  //   global.dogs = global.dogs || [];
  //   return global.dogs;
  // },
  // async items(parent, args, ctx, info) {
  //   console.log('Item Maker');
  //   const items = await ctx.db.query.item();
  //   return items;
  // },
};

module.exports = Query;