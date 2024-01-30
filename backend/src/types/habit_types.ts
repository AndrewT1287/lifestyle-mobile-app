type ReminderType = "weekdays" | "monthdays"
type HabitType = "daily" | "weekly" | "monthly"

interface Reminder {
    type: ReminderType, 
    times: Map<string, string>
}

interface Habit {
  title: string,
  description: string,
  type: HabitType,
  reminder: Reminder
}
