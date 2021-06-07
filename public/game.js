class MenuScene extends Phaser.Scene {
  constructor() {
    super("MenuScene");
  }

  preload() {
    this.load.image("intro", "assets/intro.png");
  }

  create() {
    this.add.image(270, 480, "intro");

    this.input.on("pointerdown", () => {
      this.scene.stop();
      this.scene.get("GameplayScene").scene.restart();
    });
  }

  update() {
    const spaceBar = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.SPACE
    );
    if (spaceBar.isDown) {
      this.scene.stop();
      this.scene.get("GameplayScene").scene.restart();
    }
  }
}

class GameplayScene extends Phaser.Scene {
  constructor() {
    super("GameplayScene");
  }

  init() {
    this.vandy = null;
    this.wall = null;
    this.casualtyCount = 0;
    this.casualtyText = null;
    this.scoreText = null;
    this.score = 0;
    this.isVandyHurt = false;
    this.isVandyTinted = false;
    this.line1 = null;
    this.line2 = null;
    this.line3 = null;
    this.line4 = null;
    this.line5 = null;
    this.line6 = null;
    this.line7 = null;
    this.line8 = null;
    this.lines = [];
    this.gatheredMembers = [];
    this.showingActiveMember = false;
    this.activeMember = null;
    this.memberText = null;
    this.stage = null;
    this.goalRect = null;
    this.collisionGoalRect = null;
    this.smallMembers = [];
    this.intervals = [];
  }

  preload() {
    this.load.image("background", "assets/background.jpg");
    this.load.image("stage", "assets/stage.png");
    this.load.image("vandy", "assets/vandy.png");
    this.load.image("small_vandy", "assets/vandy_small.png");
    this.load.image("cardboardan", "assets/cardboardan.png");
    this.load.image("the_weather", "assets/the_weather.png");
    this.load.image("pad_thai", "assets/pad_thai.png");
    this.load.image("oatly", "assets/oatly.png");
    this.load.image("line", "assets/line.png");
    this.load.image("member_0", "assets/member_0.png"); // clyde
    this.load.image("member_1", "assets/member_1.png"); // gracie
    this.load.image("member_2", "assets/member_2.png"); // jordan
    this.load.image("member_3", "assets/member_3.png"); // karsh
    this.load.image("member_4", "assets/member_4.png"); // sam
    this.load.image("member_5", "assets/member_5.png"); // sumner
    this.load.image("member_6", "assets/member_6.png"); // marc
    this.load.image("member_7", "assets/member_7.png"); // johnny
    this.load.image("small_member_0", "assets/small_member_0.png"); // small clyde
    this.load.image("small_member_1", "assets/small_member_1.png"); // small gracie
    this.load.image("small_member_2", "assets/small_member_2.png"); // small jordan
    this.load.image("small_member_3", "assets/small_member_3.png"); // small karsh
    this.load.image("small_member_4", "assets/small_member_4.png"); // small sam
    this.load.image("small_member_5", "assets/small_member_5.png"); // small sumner
    this.load.image("small_member_6", "assets/small_member_6.png"); // small marc
    this.load.image("small_member_7", "assets/small_member_7.png"); // small johnny
  }

  randomWallImg() {
    if (Math.random() < 0.15) {
      return "oatly";
    } else {
      return ["cardboardan", "the_weather", "pad_thai"][
        Math.floor(Math.random() * 3)
      ];
    }
  }

  randomWallPosition() {
    return [420, 635, 855][Math.floor(Math.random() * 3)];
  }

  drawLines(context) {
    this.line1 = context.physics.add.sprite(100, 530, "line");
    this.lines.push(this.line1);

    this.line2 = context.physics.add.sprite(250, 530, "line");
    this.lines.push(this.line2);

    this.line3 = context.physics.add.sprite(400, 530, "line");
    this.lines.push(this.line3);

    this.line4 = context.physics.add.sprite(550, 530, "line");
    this.lines.push(this.line4);

    // second row
    this.line5 = context.physics.add.sprite(100, 750, "line");
    this.lines.push(this.line5);

    this.line6 = context.physics.add.sprite(250, 750, "line");
    this.lines.push(this.line6);

    this.line7 = context.physics.add.sprite(400, 750, "line");
    this.lines.push(this.line7);

    this.line8 = context.physics.add.sprite(550, 750, "line");
    this.lines.push(this.line8);

    const lineInterval = setInterval(() => {
      this.lines.forEach((line) => {
        if (line.x - 15 < -50) {
          line.x = 550;
        } else {
          line.x -= 15;
        }
      });
    }, 50);

    this.intervals.push(lineInterval);
  }

  drawSmallMembers(context) {
    for (let i = 0; i < 8; i++) {
      const smallMember = context.add.image(
        95 + i * 50,
        160,
        `small_member_${i}`
      );
      this.smallMembers.push(smallMember);
    }
  }

  create() {
    this.add.image(270, 480, "background");
    this.stage = this.add.image(270, 240, "stage");
    this.goalRect = this.add.rectangle(270, 420, 300, 200, 0x008800);
    this.collisionGoalRect = this.add.rectangle(270, 340, 40, 40, 0x0000000);
    this.collisionGoalRect.setAlpha(0);
    this.tweens.add({
      targets: this.goalRect,
      alpha: 0.2,
      yoyo: true,
      repeat: -1,
      ease: "Sine.easeInOut",
    });
    this.goalRect.visible = false;
    this.stage.setAlpha(0);
    this.drawLines(this);
    this.drawSmallMembers(this);
    this.add.image(30, 30, "small_vandy");
    this.casualtyText = this.add.text(70, 16, "x 5", {
      fontSize: "32px",
      fill: "#000",
    });
    this.memberText = this.add.text(100, 80, "members to pick up", {
      fontSize: "32px",
      fill: "#000",
    });
    this.scoreText = this.add.text(496, 16, "0", {
      fontSize: "32px",
      fill: "#000",
      align: "right",
    });
    this.vandy = this.physics.add.sprite(120, 400, "vandy");
    this.physics.add.existing(this.collisionGoalRect);

    this.vandy
      .setInteractive({ draggable: true })
      .on("drag", (pointer, dragX, dragY) => {
        let newYPosition;
        if (dragY < 400) {
          newYPosition = 400;
        } else if (dragY > 850) {
          newYPosition = 850;
        } else {
          newYPosition = dragY;
        }

        let newXPosition;
        if (dragX > 440) {
          newXPosition = 440;
        } else if (dragX < 100) {
          newXPosition = 100;
        } else {
          newXPosition = dragX;
        }

        this.vandy.setPosition(newXPosition, newYPosition);
      });

    this.wall = this.physics.add.sprite(
      600,
      this.randomWallPosition(),
      this.randomWallImg()
    );
    this.physics.add.overlap(this.vandy, this.wall, this.casualty, null, this);
    this.physics.add.overlap(
      this.vandy,
      this.collisionGoalRect,
      this.detectGoalCollision,
      null,
      this
    );

    const wallInterval = setInterval(() => {
      if (this.wall) {
        this.wall.x -= 15;
      }
    }, 50);

    this.intervals.push(wallInterval);

    const memberInterval = setInterval(() => {
      if (!this.sys.settings.active) return;
      if (!this.showingActiveMember) {
        const randomXPosition = this.randomMemberX();
        const randomYPosition = this.randomMemberY();
        const vandyBounds = this.vandy.getBounds();

        if (
          this.withinRange(
            randomXPosition,
            vandyBounds.x,
            vandyBounds.x + vandyBounds.width
          ) &&
          this.withinRange(
            randomYPosition,
            vandyBounds.y,
            vandyBounds.y + vandyBounds.height
          )
        ) {
          return null;
        } else {
          this.activeMember = this.physics.add.sprite(
            randomXPosition,
            randomYPosition,
            this.randomMemberImg()
          );
          this.physics.add.overlap(
            this.vandy,
            this.activeMember,
            this.gatherMember,
            null,
            this
          );
          this.showingActiveMember = true;
        }
      } else {
        this.activeMember.destroy();
        this.showingActiveMember = false;
      }
    }, 2000);

    this.intervals.push(memberInterval);
  }

  withinRange(number, left, right) {
    return left <= number && number <= right;
  }

  gatherMember(vandy, member) {
    const memberIndex = parseInt(member.texture.key.split("_")[1], 10);

    if (this.gatheredMembers.indexOf(memberIndex) > -1) {
      this.score -= 25;
    } else {
      this.score += 50;
      this.smallMembers[memberIndex].setAlpha(0.3);
      this.gatheredMembers.push(memberIndex);
    }
    this.scoreText.setText(`${this.score.toString()}`);
    this.scoreText.x = 516 - this.scoreText.width;
    member.destroy();
    this.showingActiveMember = false;
  }

  randomMemberX() {
    return [100, 280, 460][Math.floor(Math.random() * 3)];
  }

  randomMemberY() {
    return [420, 620, 860][Math.floor(Math.random() * 3)];
  }

  randomMemberImg() {
    const allIndices = [0, 1, 2, 3, 4, 5, 6, 7];
    const remainingIndices = allIndices.filter(
      (num) => !this.gatheredMembers.includes(num)
    );
    const randyNumberman = Math.floor(Math.random() * 100);

    if (randyNumberman >= 70 && remainingIndices.length > 0) {
      return (
        "member_" +
        remainingIndices[
          Math.floor(Math.random() * remainingIndices.length)
        ].toString()
      );
    } else {
      return (
        "member_" +
        allIndices[Math.floor(Math.random() * allIndices.length)].toString()
      );
    }
  }

  detectGoalCollision(vandy, collisionRect) {
    if (this.gatheredMembers.length === 8) {
      this.score += 1000;
      this.scoreText.setText(`${this.score.toString()}`);
      this.scoreText.x = 516 - this.scoreText.width;
      this.goalRect.visible = false;
      this.memberText.setText("members to pick up");
      this.stage.setAlpha(0);

      this.smallMembers.map((sml) => sml.setAlpha(1));
      this.gatheredMembers = [];
    }
  }

  casualty(vandy, wall) {
    if (!this.isVandyHurt) {
      if (wall.texture.key === "oatly") {
        this.isVandyHurt = true;
        this.casualtyCount -= 1;
        this.casualtyText.setText("x " + (5 - this.casualtyCount));
        wall.destroy();
        setTimeout(() => {
          this.isVandyHurt = false;
        }, 2000);
        return;
      }

      if (this.casualtyCount === 5) {
        this.scene.stop();
        this.intervals.forEach((inty) => clearInterval(inty));
        this.scene.get("CasualtyScene").scene.restart({ score: this.score });
      }
      this.casualtyCount += 1;
      this.casualtyText.setText("x " + (5 - this.casualtyCount));
      this.isVandyHurt = true;

      let flashyInterval = setInterval(() => {
        if (this.isVandyTinted) {
          vandy.setAlpha(1);
          this.isVandyTinted = false;
        } else {
          vandy.setAlpha(0.7);
          this.isVandyTinted = true;
        }
      }, 200);

      this.intervals.push(flashyInterval);

      setTimeout(() => {
        clearInterval(flashyInterval);
        this.isVandyHurt = false;
      }, 2000);
    }
  }

  update() {
    const cursors = this.input.keyboard.createCursorKeys();
    if (!this.isVandyHurt) {
      this.vandy.setAlpha(1);
    }

    if (cursors.down.isDown) {
      if (this.vandy.y + 10 > 850) {
        this.vandy.y += 0;
      } else {
        this.vandy.y += 10;
      }
    } else if (cursors.up.isDown) {
      if (this.vandy.y - 10 < 400) {
        this.vandy.y -= 0;
      } else {
        this.vandy.y -= 10;
      }
    } else if (cursors.right.isDown) {
      if (this.vandy.x + 10 > 440) {
        this.vandy.x += 0;
      } else {
        this.vandy.x += 10;
      }
    } else if (cursors.left.isDown) {
      if (this.vandy.x - 10 < 100) {
        this.vandy.x -= 0;
      } else {
        this.vandy.x -= 10;
      }
    }

    if (this.wall && this.wall.x < 0) {
      this.wall.destroy();
      this.wall = this.physics.add.sprite(
        600,
        this.randomWallPosition(),
        this.randomWallImg()
      );
      this.physics.add.overlap(
        this.vandy,
        this.wall,
        this.casualty,
        null,
        this
      );
    }

    if (this.gatheredMembers.length === 8) {
      this.stage.setAlpha(1);
      this.goalRect.visible = true;
      this.memberText.setText("Get 'em on stage!");
    }
  }
}

class CasualtyScene extends Phaser.Scene {
  constructor(data) {
    super("CasualtyScene");
  }

  init(data) {
    this.score = data ? data.score : null;
  }

  preload() {
    this.load.image("casualty_0", "assets/casualty_0.png");
    this.load.image("casualty_1", "assets/casualty_1.png");
    this.load.image("casualty_2", "assets/casualty_2.png");
  }

  randomCasualtyScene() {
    return ["casualty_0", "casualty_1", "casualty_2"][
      Math.floor(Math.random() * 3)
    ];
  }

  create(data) {
    this.add.image(270, 480, this.randomCasualtyScene());
    this.input.on("pointerdown", () => {
      this.scene.stop();
      this.scene.get("MenuScene").scene.restart();
    });
    if (this.score) {
      this.add.text(175, 700, `score: ${this.score}`, {
        fontSize: "32px",
        fill: "yellow",
      });
    }
  }

  update() {
    const spaceBar = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.SPACE
    );
    if (spaceBar.isDown) {
      this.scene.stop();
      this.scene.get("MenuScene").scene.restart();
    }
  }
}

const config = {
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 540,
    height: 960,
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      debug: false,
    },
  },
  scene: [MenuScene, GameplayScene, CasualtyScene],
};

const game = new Phaser.Game(config);
