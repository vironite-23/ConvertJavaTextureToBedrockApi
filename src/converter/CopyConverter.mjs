import { AbstractConverter } from "@vironite-23/convert-base-api";

/**
 * Class CopyConverter
 */
class CopyConverter extends AbstractConverter {
    /**
     * @inheritDoc
     */
    async convert() {
        const [from, to] = this.data;

        if (!await this.output.exists(from)) {
            return [];
        }

        this.log.log(`Copy ${from} to ${to}`);

        await this.output.copy(from, to);

        return [];
    }

    /**
     * @inheritDoc
     */
    static get DEFAULT_CONVERTER_DATA() {
        return [
            // Battern
            ["textures/entity/banner/banner_pattern_illager.tga", "textures/entity/banner/banner_illager.tga"],

            // Beef
            ["textures/items/beef_cooked.png", "textures/items/hoglin_meat_cooked.png"],
            ["textures/items/beef_raw.png", "textures/items/hoglin_meat_raw.png"],

            // Cat
            ["textures/entity/cat/redtabby.png", "textures/entity/cat/red.png"],
            ["textures/entity/cat/siamesecat.png", "textures/entity/cat/siamese.png"],
            ["textures/entity/cat/tuxedo.png", "textures/entity/cat/blackcat.png"],

            // Cartography table
            ["textures/blocks/cartography_table_top.png", "textures/ui/cartography_table_empty.png"],

            // Command block
            ["textures/blocks/command_block_back_mipmap.png", "textures/blocks/command_block.png"],

            // Compass & clock
            ["textures/items/compass_atlas.png", "textures/items/lodestonecompass_atlas.png"],
            ["textures/items/compass_item.png", "textures/items/lodestonecompass_item.png"],

            // Fire
            ["textures/blocks/fire_0.png", "textures/flame_atlas.png"],

            // Kelp
            ["textures/blocks/kelp_a.tga", "textures/blocks/kelp_b.tga"],
            ["textures/blocks/kelp_a.tga", "textures/blocks/kelp_c.tga"],
            ["textures/blocks/kelp_a.tga", "textures/blocks/kelp_d.tga"],
            ["textures/blocks/kelp_top.tga", "textures/blocks/kelp_top_bulb.tga"],

            // Lever
            ["textures/blocks/lever.png", "textures/items/lever.png"],

            // Llama
            ["textures/entity/llama/llama_creamy.png", "textures/entity/llama/llama.png"],

            // Pattern
            ["textures/items/skull_banner_pattern.png", "textures/items/banner_pattern.png"],

            // Skull
            ["textures/entity/creeper/creeper.png", "textures/entity/skulls/creeper.png"],
            ["textures/entity/skeleton/skeleton.png", "textures/entity/skulls/skeleton.png"],
            ["textures/entity/skeleton/wither_skeleton.png", "textures/entity/skulls/wither_skeleton.png"],
            ["textures/entity/zombie/zombie.png", "textures/entity/skulls/zombie.png"],

            // UI
            ["textures/blocks/brick.png", "textures/ui/icon_recipe_construction.png"],
            ["textures/blocks/chest_front.png", "textures/ui/inventory_icon.png"],
            ["textures/blocks/grass_side_carried.png", "textures/ui/icon_recipe_nature.png"],
            ["textures/items/book_normal.png", "textures/ui/creative_icon.png"],
            ["textures/items/bed_red.png", "textures/ui/icon_recipe_item.png"],
            ["textures/items/compass_item.png", "textures/ui/magnifyingGlass.png"],
            ["textures/items/diamond_sword.png", "textures/ui/icon_recipe_equipment.png"],
            ["textures/items/empty_armor_slot_boots.png", "textures/ui/empty_armor_slot_boots.png"],
            ["textures/items/empty_armor_slot_chestplate.png", "textures/ui/empty_armor_slot_chestplate.png"],
            ["textures/items/empty_armor_slot_helmet.png", "textures/ui/empty_armor_slot_helmet.png"],
            ["textures/items/empty_armor_slot_leggings.png", "textures/ui/empty_armor_slot_leggings.png"],
            ["textures/items/empty_armor_slot_shield.png", "textures/ui/empty_armor_slot_shield.png"],

            // Wither
            ["textures/entity/creeper/creeper_armor.png", "textures/entity/wither_boss/wither_armor_blue.png"],

            // Trial spawner
            ["textures/blocks/trial_spawner_top_active.png", "textures/blocks/trial_spawner_top.png"],
            ["textures/blocks/trial_spawner_top_ejecting_reward.png", "textures/blocks/trial_spawner_top_open.png"],

            ["bedrock_textures/", "textures/"]
        ];
    }
}

export { CopyConverter };