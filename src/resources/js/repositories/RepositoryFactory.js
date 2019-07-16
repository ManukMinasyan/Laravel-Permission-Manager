import ModelRepository from "./modelRepository";
import RoleRepository from "./roleRepository";
import GroupRepository from "./groupRepository";
import PermissionRepository from "./permissionRepository";
import RouteRepository from "./routeRepository";

const repositories = {
    model: ModelRepository,
    role: RoleRepository,
    group: GroupRepository,
    permission: PermissionRepository,
    route: RouteRepository
};

export const RepositoryFactory = {
    get: name => repositories[name]
};