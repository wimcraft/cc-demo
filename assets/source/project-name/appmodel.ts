
export default class AppModel
{
    private static _instance:AppModel = null

    static get instance():AppModel
    {
        if(AppModel._instance == null)
            AppModel._instance = new AppModel();

        return AppModel._instance;
    }
}
