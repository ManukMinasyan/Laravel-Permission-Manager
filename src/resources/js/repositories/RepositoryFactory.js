import ModelRepository from "./modelRepository";
import UserRepository from "./userRepository";
import RoleRepository from "./roleRepository";
import GroupRepository from "./groupRepository";
import PermissionRepository from "./permissionRepository";
import RouteRepository from "./routeRepository";

const repositories = {
    model: ModelRepository,
    user: UserRepository,
    role: RoleRepository,
    group: GroupRepository,
    permission: PermissionRepository,
    route: RouteRepository
};

export const RepositoryFactory = {
    get: name => repositories[name]
};