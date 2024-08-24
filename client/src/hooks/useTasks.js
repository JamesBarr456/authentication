import { TaskContext } from "../context/TaskContext";
import { useContext } from "react";

export const useTasks = () => {
    const context = useContext(TaskContext);

    if (!context) {
        throw new Error("useAuth must be used within an TaskProvider")
    }

    return context;
}
