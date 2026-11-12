const multiplyValue = (value: number, multiplier?: number): number => {
  if (multiplier !== undefined) {
    return value * multiplier;
  }

  return value * 2;
};

const processInput = (
  value: string | number | boolean,
): number | string => {
  if (typeof value === "string") {
    return value.trim().toLowerCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    if (value) {
      return "Active";
    }
    return "Inactive";
  }
};

const formatCoordinate = (
  coordinate: readonly [number, number, string],
): string => {
  const [latitude, longitude, locationName] = coordinate;
  return `Location: ${locationName} (${latitude}, ${longitude})`;
};

const concatenateArrays = <T>(...arrays: T[][]): T[] => {
  const result: T[] = [];
  for (const arr of arrays) {
    result.push(...arr);
  }
  return result;
};

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

const getPopularCourses = (
  courses: Course[],
  minStudents: number,
): Course[] => {
  const popularCourses: Course[] = [];
  courses.forEach((course) => {
    if (course.isPublished && course.students >= minStudents) {
      popularCourses.push(course);
    }
  });
  return popularCourses;
};

const pluckValues = <T, K extends keyof T>(
  items: T[],
  key: K,
): T[K][] => {
  const values: T[K][] = [];
  items.forEach((item) => {
    values.push(item[key]);
  });
  return values;
};

class Employee {
  constructor(
    protected name: string,
    private baseSalary: number,
  ) {}

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  constructor(
    name: string,
    baseSalary: number,
    private department: string,
  ) {
    super(name, baseSalary);
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

const validateAgeAsync = (age: number): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    if (age < 18) {
      reject(new Error("Access Denied: Must be 18 or older"));
      return;
    }
    setTimeout(() => {
      resolve("Access Granted");
    }, 1000);
  });
};
