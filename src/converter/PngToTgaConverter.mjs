import { AbstractConverter } from "@vironite-23/convert-base-api";
import { DeleteConverter } from "./DeleteConverter.mjs";
import Jimp from "@geekcornernpm/jimp-plugins";

/**
 * Class PngToTgaConverter
 */
class PngToTgaConverter extends AbstractConverter {
    /**
     * @inheritDoc
     */
    async convert() {
        const [from, to, not_delete] = this.data;

        const to_delete = [];

        if (!await this.output.exists(from)) {
            return to_delete;
        }

        this.log.log(`Create tga ${to}`);

        const image = await this.readImage(from);

        await this.writeImage(to, image, Jimp.MIME_TGA);

        if (!not_delete) {
            to_delete.push(new DeleteConverter(from));
        }

        return to_delete;
    }

    /**
     * @inheritDoc
     */
    static get DEFAULT_CONVERTER_DATA() {
        return [
            ["textures/blocks/cactus_bottom.png", "textures/blocks/cactus_bottom.tga"],
            ["textures/blocks/cactus_side.png", "textures/blocks/cactus_side.tga"],
            ["textures/blocks/cactus_top.png", "textures/blocks/cactus_top.tga"],
            ["textures/blocks/double_plant_fern_bottom.png", "textures/blocks/double_plant_fern_bottom.tga"],
            ["textures/blocks/double_plant_fern_top.png", "textures/blocks/double_plant_fern_top.tga"],
            ["textures/blocks/double_plant_grass_bottom.png", "textures/blocks/double_plant_grass_bottom.tga"],
            ["textures/blocks/double_plant_grass_top.png", "textures/blocks/double_plant_grass_top.tga"],
            ["textures/blocks/double_plant_syringa_bottom.png", "textures/blocks/double_plant_syringa_bottom.tga"],
            ["textures/blocks/double_plant_syringa_top.png", "textures/blocks/double_plant_syringa_top.tga"],
            ["textures/blocks/fern.png", "textures/blocks/fern.tga"],
            ["textures/blocks/fern_carried.png", "textures/blocks/fern_carried.tga"],
            ["textures/blocks/grass_side.png", "textures/blocks/grass_side.tga"],
            ["textures/blocks/grass_side_snowed.png", "textures/blocks/grass_side_snowed.tga", true],
            ["textures/blocks/grindstone_pivot.png", "textures/blocks/grindstone_pivot.tga"],
            ["textures/blocks/grindstone_round.png", "textures/blocks/grindstone_round.tga"],
            ["textures/blocks/grindstone_side.png", "textures/blocks/grindstone_side.tga"],
            ["textures/blocks/kelp_a.png", "textures/blocks/kelp_a.tga"],
            ["textures/blocks/kelp_b.png", "textures/blocks/kelp_b.tga"],
            ["textures/blocks/kelp_c.png", "textures/blocks/kelp_c.tga"],
            ["textures/blocks/kelp_d.png", "textures/blocks/kelp_d.tga"],
            ["textures/blocks/kelp_top.png", "textures/blocks/kelp_top.tga"],
            ["textures/blocks/kelp_top_bulb.png", "textures/blocks/kelp_top_bulb.tga"],
            ["textures/blocks/leaves_acacia.png", "textures/blocks/leaves_acacia.tga"],
            ["textures/blocks/leaves_acacia_carried.png", "textures/blocks/leaves_acacia_carried.tga"],
            ["textures/blocks/leaves_big_oak.png", "textures/blocks/leaves_big_oak.tga"],
            ["textures/blocks/leaves_big_oak_carried.png", "textures/blocks/leaves_big_oak_carried.tga"],
            ["textures/blocks/leaves_birch.png", "textures/blocks/leaves_birch.tga"],
            ["textures/blocks/leaves_birch_carried.png", "textures/blocks/leaves_birch_carried.tga"],
            ["textures/blocks/leaves_jungle.png", "textures/blocks/leaves_jungle.tga"],
            ["textures/blocks/leaves_jungle_carried.png", "textures/blocks/leaves_jungle_carried.tga"],
            ["textures/blocks/leaves_oak.png", "textures/blocks/leaves_oak.tga"],
            ["textures/blocks/leaves_oak_carried.png", "textures/blocks/leaves_oak_carried.tga"],
            ["textures/blocks/leaves_spruce.png", "textures/blocks/leaves_spruce.tga"],
            ["textures/blocks/leaves_spruce_carried.png", "textures/blocks/leaves_spruce_carried.tga"],
            ["textures/blocks/reeds.png", "textures/blocks/reeds.tga"],
            ["textures/blocks/scaffolding_bottom.png", "textures/blocks/scaffolding_bottom.tga"],
            ["textures/blocks/scaffolding_side.png", "textures/blocks/scaffolding_side.tga"],
            ["textures/blocks/scaffolding_top.png", "textures/blocks/scaffolding_top.tga"],
            ["textures/blocks/seagrass_doubletall_bottom_a.png", "textures/blocks/seagrass_doubletall_bottom_a.tga"],
            ["textures/blocks/seagrass_doubletall_bottom_b.png", "textures/blocks/seagrass_doubletall_bottom_b.tga"],
            ["textures/blocks/seagrass_doubletall_top_a.png", "textures/blocks/seagrass_doubletall_top_a.tga"],
            ["textures/blocks/seagrass_doubletall_top_b.png", "textures/blocks/seagrass_doubletall_top_b.tga"],
            ["textures/blocks/stonecutter2_saw.png", "textures/blocks/stonecutter2_saw.tga"],
            ["textures/blocks/tallgrass.png", "textures/blocks/tallgrass.tga", true],
            ["textures/blocks/tallgrass_carried.png", "textures/blocks/tallgrass_carried.tga"],
            ["textures/entity/blaze.png", "textures/entity/blaze.tga"],
            ["textures/entity/phantom.png", "textures/entity/phantom.tga"],
            ["textures/entity/banner/banner.png", "textures/entity/banner/banner.tga"],
            ["textures/entity/banner/banner_pattern_illager.png", "textures/entity/banner/banner_pattern_illager.tga"],
            ["textures/entity/banner_base.png", "textures/entity/banner/banner_base.tga"],
            ["textures/entity/banner/border.png", "textures/entity/banner/banner_border.tga"],
            ["textures/entity/banner/bricks.png", "textures/entity/banner/banner_bricks.tga"],
            ["textures/entity/banner/circle.png", "textures/entity/banner/banner_circle.tga"],
            ["textures/entity/banner/creeper.png", "textures/entity/banner/banner_creeper.tga"],
            ["textures/entity/banner/cross.png", "textures/entity/banner/banner_cross.tga"],
            ["textures/entity/banner/curly_border.png", "textures/entity/banner/banner_curly_border.tga"],
            ["textures/entity/banner/diagonal_left.png", "textures/entity/banner/banner_diagonal_left.tga"],
            ["textures/entity/banner/diagonal_right.png", "textures/entity/banner/banner_diagonal_right.tga"],
            ["textures/entity/banner/diagonal_up_left.png", "textures/entity/banner/banner_diagonal_up_left.tga"],
            ["textures/entity/banner/diagonal_up_right.png", "textures/entity/banner/banner_diagonal_up_right.tga"],
            ["textures/entity/banner/flower.png", "textures/entity/banner/banner_flower.tga"],
            ["textures/entity/banner/gradient.png", "textures/entity/banner/banner_gradient.tga"],
            ["textures/entity/banner/gradient_up.png", "textures/entity/banner/banner_gradient_up.tga"],
            ["textures/entity/banner/half_horizontal.png", "textures/entity/banner/banner_half_horizontal.tga"],
            ["textures/entity/banner/half_horizontal_bottom.png", "textures/entity/banner/banner_half_horizontal_bottom.tga"],
            ["textures/entity/banner/half_vertical.png", "textures/entity/banner/banner_half_vertical.tga"],
            ["textures/entity/banner/half_vertical_right.png", "textures/entity/banner/banner_half_vertical_right.tga"],
            ["textures/entity/banner/mojang.png", "textures/entity/banner/banner_mojang.tga"],
            ["textures/entity/banner/piglin.png", "textures/entity/banner/banner_piglin.tga"],
            ["textures/entity/banner/rhombus.png", "textures/entity/banner/banner_rhombus.tga"],
            ["textures/entity/banner/skull.png", "textures/entity/banner/banner_skull.tga"],
            ["textures/entity/banner/small_stripes.png", "textures/entity/banner/banner_small_stripes.tga"],
            ["textures/entity/banner/square_bottom_left.png", "textures/entity/banner/banner_square_bottom_left.tga"],
            ["textures/entity/banner/square_bottom_right.png", "textures/entity/banner/banner_square_bottom_right.tga"],
            ["textures/entity/banner/square_top_left.png", "textures/entity/banner/banner_square_top_left.tga"],
            ["textures/entity/banner/square_top_right.png", "textures/entity/banner/banner_square_top_right.tga"],
            ["textures/entity/banner/straight_cross.png", "textures/entity/banner/banner_straight_cross.tga"],
            ["textures/entity/banner/stripe_bottom.png", "textures/entity/banner/banner_stripe_bottom.tga"],
            ["textures/entity/banner/stripe_center.png", "textures/entity/banner/banner_stripe_center.tga"],
            ["textures/entity/banner/stripe_downleft.png", "textures/entity/banner/banner_stripe_downleft.tga"],
            ["textures/entity/banner/stripe_downright.png", "textures/entity/banner/banner_stripe_downright.tga"],
            ["textures/entity/banner/stripe_left.png", "textures/entity/banner/banner_stripe_left.tga"],
            ["textures/entity/banner/stripe_middle.png", "textures/entity/banner/banner_stripe_middle.tga"],
            ["textures/entity/banner/stripe_right.png", "textures/entity/banner/banner_stripe_right.tga"],
            ["textures/entity/banner/stripe_top.png", "textures/entity/banner/banner_stripe_top.tga"],
            ["textures/entity/banner/triangle_bottom.png", "textures/entity/banner/banner_triangle_bottom.tga"],
            ["textures/entity/banner/triangle_top.png", "textures/entity/banner/banner_triangle_top.tga"],
            ["textures/entity/banner/triangles_bottom.png", "textures/entity/banner/banner_triangles_bottom.tga"],
            ["textures/entity/banner/triangles_top.png", "textures/entity/banner/banner_triangles_top.tga"],
            ["textures/entity/cat/allblackcat_tame.png", "textures/entity/cat/allblackcat_tame.tga"],
            ["textures/entity/cat/britishshorthair_tame.png", "textures/entity/cat/britishshorthair_tame.tga"],
            ["textures/entity/cat/calico_tame.png", "textures/entity/cat/calico_tame.tga"],
            ["textures/entity/cat/graytabby_tame.png", "textures/entity/cat/graytabby_tame.tga"],
            ["textures/entity/cat/jellie_tame.png", "textures/entity/cat/jellie_tame.tga"],
            ["textures/entity/cat/ocelot_tame.png", "textures/entity/cat/ocelot_tame.tga"],
            ["textures/entity/cat/persian_tame.png", "textures/entity/cat/persian_tame.tga"],
            ["textures/entity/cat/ragdoll_tame.png", "textures/entity/cat/ragdoll_tame.tga"],
            ["textures/entity/cat/redtabby_tame.png", "textures/entity/cat/redtabby_tame.tga"],
            ["textures/entity/cat/siamesecat_tame.png", "textures/entity/cat/siamesecat_tame.tga"],
            ["textures/entity/cat/tabby_tame.png", "textures/entity/cat/tabby_tame.tga"],
            ["textures/entity/cat/tuxedo_tame.png", "textures/entity/cat/tuxedo_tame.tga"],
            ["textures/entity/cat/white_tame.png", "textures/entity/cat/white_tame.tga"],
            ["textures/entity/dragon/dragon.png", "textures/entity/dragon/dragon.tga"],
            ["textures/entity/enderman/enderman.png", "textures/entity/enderman/enderman.tga"],
            ["textures/entity/ghast/ghast_shooting.png", "textures/entity/ghast/ghast_shooting.tga"],
            ["textures/entity/horse/armor/horse_armor_leather.png", "textures/entity/horse/armor/horse_armor_leather.tga"],
            ["textures/entity/horse2/armor/horse_armor_leather.png", "textures/entity/horse2/armor/horse_armor_leather.tga"],
            ["textures/entity/sheep/sheep.png", "textures/entity/sheep/sheep.tga"],
            ["textures/entity/slime/magmacube.png", "textures/entity/slime/magmacube.tga"],
            ["textures/entity/spider/cave_spider.png", "textures/entity/spider/cave_spider.tga"],
            ["textures/entity/spider/spider.png", "textures/entity/spider/spider.tga"],
            ["textures/entity/villager2/professions/armorer.png", "textures/entity/villager2/professions/armorer.tga"],
            ["textures/entity/villager2/professions/butcher.png", "textures/entity/villager2/professions/butcher.tga"],
            ["textures/entity/villager2/professions/cartographer.png", "textures/entity/villager2/professions/cartographer.tga"],
            ["textures/entity/villager2/professions/cleric.png", "textures/entity/villager2/professions/cleric.tga"],
            ["textures/entity/villager2/professions/farmer.png", "textures/entity/villager2/professions/farmer.tga"],
            ["textures/entity/villager2/professions/fisherman.png", "textures/entity/villager2/professions/fisherman.tga"],
            ["textures/entity/villager2/professions/fletcher.png", "textures/entity/villager2/professions/fletcher.tga"],
            ["textures/entity/villager2/professions/leatherworker.png", "textures/entity/villager2/professions/leatherworker.tga"],
            ["textures/entity/villager2/professions/librarian.png", "textures/entity/villager2/professions/librarian.tga"],
            ["textures/entity/villager2/professions/nitwit.png", "textures/entity/villager2/professions/nitwit.tga"],
            ["textures/entity/villager2/professions/shepherd.png", "textures/entity/villager2/professions/shepherd.tga"],
            ["textures/entity/villager2/professions/stonemason.png", "textures/entity/villager2/professions/stonemason.tga"],
            ["textures/entity/villager2/professions/toolsmith.png", "textures/entity/villager2/professions/toolsmith.tga"],
            ["textures/entity/villager2/professions/unskilled.png", "textures/entity/villager2/professions/unskilled.tga"],
            ["textures/entity/villager2/professions/weaponsmith.png", "textures/entity/villager2/professions/weaponsmith.tga"],
            ["textures/entity/wolf/wolf_tame.png", "textures/entity/wolf/wolf_tame.tga"],
            ["textures/entity/zombie/drowned.png", "textures/entity/zombie/drowned.tga"],
            ["textures/entity/zombie_villager2/professions/armorer.png", "textures/entity/zombie_villager2/professions/armorer.tga"],
            ["textures/entity/zombie_villager2/professions/butcher.png", "textures/entity/zombie_villager2/professions/butcher.tga"],
            ["textures/entity/zombie_villager2/professions/cartographer.png", "textures/entity/zombie_villager2/professions/cartographer.tga"],
            ["textures/entity/zombie_villager2/professions/cleric.png", "textures/entity/zombie_villager2/professions/cleric.tga"],
            ["textures/entity/zombie_villager2/professions/farmer.png", "textures/entity/zombie_villager2/professions/farmer.tga"],
            ["textures/entity/zombie_villager2/professions/fisherman.png", "textures/entity/zombie_villager2/professions/fisherman.tga"],
            ["textures/entity/zombie_villager2/professions/fletcher.png", "textures/entity/zombie_villager2/professions/fletcher.tga"],
            ["textures/entity/zombie_villager2/professions/leatherworker.png", "textures/entity/zombie_villager2/professions/leatherworker.tga"],
            ["textures/entity/zombie_villager2/professions/librarian.png", "textures/entity/zombie_villager2/professions/librarian.tga"],
            ["textures/entity/zombie_villager2/professions/nitwit.png", "textures/entity/zombie_villager2/professions/nitwit.tga"],
            ["textures/entity/zombie_villager2/professions/shepherd.png", "textures/entity/zombie_villager2/professions/shepherd.tga"],
            ["textures/entity/zombie_villager2/professions/stonemason.png", "textures/entity/zombie_villager2/professions/stonemason.tga"],
            ["textures/entity/zombie_villager2/professions/toolsmith.png", "textures/entity/zombie_villager2/professions/toolsmith.tga"],
            ["textures/entity/zombie_villager2/professions/weaponsmith.png", "textures/entity/zombie_villager2/professions/weaponsmith.tga"],
            ["textures/items/fireworks_charge.png", "textures/items/fireworks_charge.tga"],
            ["textures/items/leather_boots.png", "textures/items/leather_boots.tga"],
            ["textures/items/leather_helmet.png", "textures/items/leather_helmet.tga"],
            ["textures/items/leather_horse_armor.png", "textures/items/leather_horse_armor.tga"],
            ["textures/items/leather_leggings.png", "textures/items/leather_leggings.tga"],
            ["textures/models/armor/leather_1.png", "textures/models/armor/leather_1.tga"],
            ["textures/models/armor/leather_2.png", "textures/models/armor/leather_2.tga"],
            
            //new added
            ["textures/blocks/pale_oak_leaves.png", "textures/blocks/pale_oak_leaves.tga"],
            ["textures/blocks/pale_oak_leaves.png", "textures/blocks/pale_oak_leaves_carried.tga"]
        ];
    }
}

export { PngToTgaConverter };