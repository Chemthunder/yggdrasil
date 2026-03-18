enum LogTypes {
    WARN,
    ERR,
    DEBUG,
    INFO
}

class Project {
    _id: string;

    constructor(id: string) {
        this._id = id;
    }

    get id(): string {
        return this._id;
    }

    set id(str: string) {
        this.id = str;
    }

    projectLogId(): string {
        return "(" + this.id + ") ";
    }

    log(contents: string, info?: LogTypes) {
        let toLog = contents;

        try {
            if (info != null) {
                let addStr: string;
                switch (info) {
                    case (LogTypes.WARN): {
                        addStr = " [WARN]";
                        break;
                    }
                    case (LogTypes.ERR): {
                        addStr = " [ERROR]";
                        break;
                    }
                    case (LogTypes.DEBUG): {
                        addStr = " [DEBUG]";
                        break;
                    }
                    case (LogTypes.INFO): {
                        addStr = " [INFO]";
                        break;
                    }

                    default: {
                        addStr = "";
                        break;
                    }
                }

                console.log(this.projectLogId() + contents + addStr);
            } else {
                console.log(this.projectLogId() + contents);
            }
        } catch {
            console.log("Failure to log");
        }
    }

    stop(reason: string) {
        control.fail(reason);
    }

    reload(reason: string) {
        this.log("Reloading project due to: " + reason, LogTypes.ERR);
        game.reset();
    }
}


/**
 * Geode blocks
 */
//% weight=40 color=#d268fc icon="\uf085"
//% advanced=true
namespace geode {
    const GeodeLogger: Project = geode.register("Geode");

    /**
     * Creates a project.
     * @param projectName The name of the project (should be the same as your file's project name).
     */
    //% block
    export function register(projectName: string): Project {
        let createdProject = new Project(projectName);
        createdProject.log("Registration complete!");
        return createdProject;
    }
}

