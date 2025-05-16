import { blank } from './levels/blank.js';
import { welcome } from './levels/welcome.js';
import { level1 } from './levels/level1.js';

/*
    This class is used for loading levels. The loadLevel() function
    is purposely static, so you don't need to create an instance
    of this class.
*/
class LevelLoader {
    static levels = {
        blank: () => blank(),
        welcome: () => welcome(),
        level1: () => level1(),
    };

    static loadLevel(levelName) {
        try {
            if (levelName != undefined && levelName != null && levelName.length > 0) {
                return this.levels[levelName]();
            }
        } catch {
            return null;
        }

        return null;
    }
}

export { LevelLoader };
