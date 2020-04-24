export const createLogger = name => {
    const logs = [];

    return {
        log(){
            this.log(message)
            logs.push(`log - ${name} - ${message}`)
        },
        error(errorText){
            logs.push(`error - ${name} - ${errorText}`)
        },
        getLogs(){
            return logs;
        }
    }
}